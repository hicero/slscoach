import { useState, useEffect } from 'react';
import { Users, Plus, Save, User, FileText, Calendar, Activity, ChevronRight, Trash2, AlertTriangle } from 'lucide-react';
import { VOCAL_TYPES } from '../types';

interface LessonLog {
  id: string;
  date: string;
  vocalTypeId: string;
  notes: string;
}

interface Student {
  id: string;
  name: string;
  age: string;
  gender: string;
  primaryTypeId: string;
  logs: LessonLog[];
}

export default function StudentLog() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [isAddingLog, setIsAddingLog] = useState(false);

  // New student form state
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentAge, setNewStudentAge] = useState('');
  const [newStudentGender, setNewStudentGender] = useState('여성');
  const [newStudentType, setNewStudentType] = useState('type1');

  // New log form state
  const [newLogDate, setNewLogDate] = useState(new Date().toISOString().split('T')[0]);
  const [newLogType, setNewLogType] = useState('type1');
  const [newLogNotes, setNewLogNotes] = useState('');

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('sls_student_logs');
    if (saved) {
      try {
        setStudents(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse student logs', e);
      }
    }
  }, []);

  // Save to local storage
  const saveStudents = (newStudents: Student[]) => {
    setStudents(newStudents);
    localStorage.setItem('sls_student_logs', JSON.stringify(newStudents));
  };

  const handleAddStudent = () => {
    if (!newStudentName.trim()) return;

    const newStudent: Student = {
      id: Date.now().toString(),
      name: newStudentName,
      age: newStudentAge,
      gender: newStudentGender,
      primaryTypeId: newStudentType,
      logs: [],
    };

    saveStudents([...students, newStudent]);
    setNewStudentName('');
    setNewStudentAge('');
    setIsAddingStudent(false);
    setSelectedStudentId(newStudent.id);
  };

  // 확인 모달 상태
  const [deleteConfirm, setDeleteConfirm] = useState<{ type: 'student' | 'log', studentId: string, logId?: string } | null>(null);

  const confirmDeleteStudent = (id: string) => setDeleteConfirm({ type: 'student', studentId: id });
  const confirmDeleteLog = (studentId: string, logId: string) => setDeleteConfirm({ type: 'log', studentId, logId });

  const executeDelete = () => {
    if (!deleteConfirm) return;
    if (deleteConfirm.type === 'student') {
      const updated = students.filter(s => s.id !== deleteConfirm.studentId);
      saveStudents(updated);
      if (selectedStudentId === deleteConfirm.studentId) {
        setSelectedStudentId(null);
      }
    } else if (deleteConfirm.type === 'log') {
      const updatedStudents = students.map(student => {
        if (student.id === deleteConfirm.studentId) {
          return {
            ...student,
            logs: student.logs.filter(log => log.id !== deleteConfirm.logId)
          };
        }
        return student;
      });
      saveStudents(updatedStudents);
    }
    setDeleteConfirm(null);
  };

  const handleAddLog = () => {
    if (!selectedStudentId || !newLogNotes.trim()) return;

    const updatedStudents = students.map(student => {
      if (student.id === selectedStudentId) {
        const newLog: LessonLog = {
          id: Date.now().toString(),
          date: newLogDate,
          vocalTypeId: newLogType,
          notes: newLogNotes,
        };
        // 최신 날짜가 위로 오도록
        const updatedLogs = [newLog, ...student.logs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return {
          ...student,
          logs: updatedLogs,
          primaryTypeId: newLogType // Update primary type to the latest log's type
        };
      }
      return student;
    });

    saveStudents(updatedStudents);
    setNewLogNotes('');
    setIsAddingLog(false);
  };

  const selectedStudent = students.find(s => s.id === selectedStudentId);

  const getTypeName = (typeId: string) => {
    const type = VOCAL_TYPES.find(v => v.id === typeId);
    return type ? type.koreanName.split(' ')[0] : 'Unknown';
  };

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6">
      
      {/* Sidebar: Student List */}
      <div className="w-full md:w-1/3 flex flex-col border-r border-slate-100 pr-0 md:pr-6 gap-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Users size={18} className="text-teal-600" />
            수강생 목록 ({students.length})
          </h2>
          <button 
            onClick={() => setIsAddingStudent(!isAddingStudent)}
            className="p-1.5 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>

        {isAddingStudent && (
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3 mb-4">
            <h3 className="text-sm font-bold text-slate-700 mb-2">새 수강생 추가</h3>
            <div className="space-y-2">
              <input 
                type="text" 
                placeholder="이름" 
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-teal-500"
              />
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="나이/연령대" 
                  value={newStudentAge}
                  onChange={(e) => setNewStudentAge(e.target.value)}
                  className="w-1/2 px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-teal-500"
                />
                <select 
                  value={newStudentGender}
                  onChange={(e) => setNewStudentGender(e.target.value)}
                  className="w-1/2 px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-teal-500 bg-white"
                >
                  <option value="여성">여성</option>
                  <option value="남성">남성</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <select 
                  value={newStudentType}
                  onChange={(e) => setNewStudentType(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-teal-500 bg-white"
                >
                  {VOCAL_TYPES.map(type => (
                    <option key={type.id} value={type.id}>{type.koreanName.split(' (')[0]}</option>
                  ))}
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <button 
                onClick={() => setIsAddingStudent(false)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-200 rounded-md"
              >
                취소
              </button>
              <button 
                onClick={handleAddStudent}
                className="px-3 py-1.5 text-xs font-semibold bg-teal-600 text-white hover:bg-teal-700 rounded-md shadow-sm"
              >
                추가
              </button>
            </div>
          </div>
        )}

        <div className="space-y-2 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
          {students.length === 0 && !isAddingStudent && (
            <div className="text-center py-10 text-slate-400 text-sm">
              우측 상단 <strong>+</strong> 버튼을 눌러 수강생을 추가해주세요.
            </div>
          )}
          {students.map(student => (
            <button
              key={student.id}
              onClick={() => setSelectedStudentId(student.id)}
              className={`w-full text-left p-3 rounded-xl transition-all border ${
                selectedStudentId === student.id 
                  ? 'bg-teal-50/50 border-teal-200 shadow-sm' 
                  : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="font-bold text-slate-800">{student.name}</div>
                <div className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium">
                  {student.logs.length}건
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className={`w-2 h-2 rounded-full ${
                  student.primaryTypeId === 'type1' ? 'bg-teal-500' : 
                  student.primaryTypeId === 'type4' || student.primaryTypeId === 'type5' ? 'bg-amber-500' : 'bg-indigo-500'
                }`}></span>
                <span className="text-[11px] text-slate-600 font-medium">
                  {getTypeName(student.primaryTypeId)}
                </span>
                <span className="text-[10px] text-slate-400 ml-auto">
                  {student.gender}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Student Detail & Logs */}
      <div className="w-full md:w-2/3 flex flex-col h-[700px] overflow-y-auto">
        {!selectedStudent ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
            <User size={64} className="text-slate-200" />
            <p>좌측에서 수강생을 선택하거나 새로 추가하세요.</p>
          </div>
        ) : (
          <div className="space-y-6 pb-10">
            {/* Student Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-5 md:p-6 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-4 right-4 flex gap-2">
                <button 
                  onClick={() => confirmDeleteStudent(selectedStudent.id)}
                  className="p-2 bg-slate-800/80 hover:bg-rose-500 text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-700 hover:border-rose-400"
                  title="학생 삭제"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="flex items-center gap-3 mb-4 z-10 relative">
                <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center font-bold text-xl">
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{selectedStudent.name}</h1>
                  <p className="text-xs text-slate-400 mt-0.5">{selectedStudent.age || '연령 미상'} · {selectedStudent.gender}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl flex items-center gap-3">
                  <Activity className="text-teal-400" size={18} />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">주력 텐즈투 (Tends To)</div>
                    <div className="text-sm font-semibold text-slate-200 mt-0.5">{getTypeName(selectedStudent.primaryTypeId)}</div>
                  </div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl flex items-center gap-3">
                  <Calendar className="text-indigo-400" size={18} />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">총 레슨 기록</div>
                    <div className="text-sm font-semibold text-slate-200 mt-0.5">{selectedStudent.logs.length} 회</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logs Area */}
            <div className="flex justify-between items-center px-1">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <FileText size={18} className="text-slate-500" />
                레슨 일지
              </h3>
              <button 
                onClick={() => {
                  setNewLogType(selectedStudent.primaryTypeId);
                  setIsAddingLog(!isAddingLog);
                }}
                className="px-3 py-1.5 bg-indigo-50 text-indigo-700 font-semibold text-xs rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors flex items-center gap-1.5"
              >
                <Plus size={14} />새 일지 작성
              </button>
            </div>

            {isAddingLog && (
              <div className="bg-indigo-50/30 border border-indigo-100 p-5 rounded-2xl animate-fade-in shadow-sm">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-indigo-100/60">
                  <h4 className="font-bold text-indigo-900">새 레슨 기록 작성</h4>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-600 block">레슨 일자</label>
                      <input 
                        type="date" 
                        value={newLogDate}
                        onChange={e => setNewLogDate(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-600 block">당일 텐즈투 (Tends To)</label>
                      <select 
                        value={newLogType}
                        onChange={e => setNewLogType(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      >
                        {VOCAL_TYPES.map(type => (
                          <option key={type.id} value={type.id}>{type.koreanName.split(' (')[0]}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-600 block">레슨 노트 (분석 및 처방 툴)</label>
                    <textarea 
                      value={newLogNotes}
                      onChange={e => setNewLogNotes(e.target.value)}
                      placeholder="발성 진단, 사용한 툴(Vocalise, SOVTE), 파지/전이 결과, 코멘트 등을 자세히 기록하세요."
                      className="w-full p-3 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px] resize-y leading-relaxed"
                    ></textarea>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button 
                      onClick={() => setIsAddingLog(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                    >
                      취소
                    </button>
                    <button 
                      onClick={handleAddLog}
                      className="px-4 py-2 text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      <Save size={14} /> 저장하기
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {selectedStudent.logs.length === 0 ? (
                <div className="py-12 border-2 border-dashed border-slate-100 rounded-2xl text-center text-slate-400 bg-slate-50/50">
                  <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                    <FileText size={20} className="text-slate-300" />
                  </div>
                  <p className="text-sm font-medium text-slate-500">아직 작성된 레슨 일지가 없습니다.</p>
                  <p className="text-xs text-slate-400 mt-1">새 일지 작성 버튼을 눌러 첫 기록을 남겨보세요.</p>
                </div>
              ) : (
                selectedStudent.logs.map(log => (
                  <div key={log.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group relative">
                    <div className="flex justify-between items-start mb-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-[11px] font-bold font-mono tracking-tight flex items-center gap-1.5">
                          <Calendar size={12} />
                          {log.date}
                        </div>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded border border-slate-100 bg-slate-50 text-slate-600">
                          {getTypeName(log.vocalTypeId)}
                        </span>
                      </div>
                      <button 
                        onClick={() => confirmDeleteLog(selectedStudent.id, log.id)}
                        className="text-slate-300 hover:text-rose-500 p-1 rounded transition-colors opacity-0 group-hover:opacity-100"
                        title="기록 삭제"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {log.notes}
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-sm animate-fade-in text-center">
            <AlertTriangle className="mx-auto text-rose-500 mb-3" size={32} />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              {deleteConfirm.type === 'student' ? '수강생 프로필 삭제' : '레슨 일지 삭제'}
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              이 기록을 영구적으로 삭제하시겠습니까?<br />이 작업은 되돌릴 수 없습니다.
            </p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex-1"
              >
                취소
              </button>
              <button
                onClick={executeDelete}
                className="px-4 py-2 font-semibold text-white bg-rose-500 hover:bg-rose-600 rounded-lg transition-colors flex-1"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
