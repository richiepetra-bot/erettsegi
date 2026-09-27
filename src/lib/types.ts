export type Level = "kozep" | "emelt";
export type TopicLevel = Level | "mindketto";
export type ExamType = "erettsegi" | "elorehozott_erettsegi" | "sat" | "act";
export type ExamStatus = "tervezett" | "lezajlott" | "torolve";
export type TopicStatus = "nem_kezdett" | "folyamatban" | "elsajatitott";
export type QuestionType = "multiple_choice" | "short_answer" | "true_false";

export type Subject = {
  id: string;
  key: string;
  name: string;
  category: "erettsegi" | "felveteli";
  has_level: boolean;
  color: string;
  icon: string | null;
  sort_order: number;
};

export type Exam = {
  id: string;
  subject_id: string;
  exam_type: ExamType;
  level: Level | null;
  written_date: string | null;
  oral_date: string | null;
  status: ExamStatus;
  notes: string | null;
};

export type ExamWithSubject = Exam & { subject: Subject };

export type Topic = {
  id: string;
  subject_id: string;
  slug: string;
  title: string;
  level: TopicLevel;
  theme: string | null;
  order_index: number;
  summary_markdown: string | null;
  content_markdown: string | null;
  key_concepts: string[];
  source_refs: { label: string; url: string }[];
};

export type TopicWithProgress = Topic & {
  progress: TopicProgress | null;
};

export type QuizQuestion = {
  id: string;
  topic_id: string;
  question_type: QuestionType;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string | null;
  difficulty: number;
  order_index: number;
};

export type TopicProgress = {
  topic_id: string;
  status: TopicStatus;
  stars: number;
  best_accuracy: number;
  last_reviewed_at: string | null;
  next_review_at: string | null;
};

export type UserProgress = {
  id: number;
  total_xp: number;
  current_streak: number;
  longest_streak: number;
  last_activity_date: string | null;
};

export type QuizSessionResult = {
  correctCount: number;
  totalCount: number;
  accuracy: number;
  stars: number;
  xpEarned: number;
  newTotalXp: number;
  newStreak: number;
};

export type PracticeMode = "daily" | "subject" | "weak";

export type PracticeQuestion = QuizQuestion & {
  topic_title: string;
  subject_key: string;
  subject_name: string;
  subject_color: string;
};

export type PracticeAnswer = { questionId: string; topicId: string; selectedAnswer: string };

export type GroupBreakdown = {
  key: string;
  label: string;
  color: string;
  correct: number;
  total: number;
};

export type PracticeSessionResult = {
  correctCount: number;
  totalCount: number;
  accuracy: number;
  xpEarned: number;
  newTotalXp: number;
  newStreak: number;
  bySubject: GroupBreakdown[];
  byTopic: GroupBreakdown[];
};

export type TopicAccuracyStat = {
  topicId: string;
  topicTitle: string;
  subjectKey: string;
  subjectName: string;
  subjectColor: string;
  attempts: number;
  correct: number;
  accuracy: number;
};

export type SubjectAccuracyStat = {
  subjectKey: string;
  subjectName: string;
  subjectColor: string;
  attempts: number;
  correct: number;
  accuracy: number;
};

export type AllTimeStats = {
  totalAttempts: number;
  totalCorrect: number;
  overallAccuracy: number;
  bySubject: SubjectAccuracyStat[];
  byTopic: TopicAccuracyStat[];
};

export type ParentSubjectProgress = {
  subject: Subject;
  topicCount: number;
  masteredCount: number;
};

export type ParentDashboardData = {
  userProgress: UserProgress;
  level: number;
  subjectProgress: ParentSubjectProgress[];
  allTimeStats: AllTimeStats;
  weakTopics: TopicAccuracyStat[];
  daysSinceLastActivity: number | null;
  activeDaysLast30: number;
};

export type StudyPlanTopic = {
  id: string;
  title: string;
  slug: string;
  subjectKey: string;
  isWeak: boolean;
};

export type StudyPlanWeek = {
  weekIndex: number;
  startDate: string;
  endDate: string;
  topics: StudyPlanTopic[];
};

export type SubjectStudyPlan = {
  subjectKey: string;
  subjectName: string;
  subjectColor: string;
  examDate: string;
  examLabel: string;
  weeksRemaining: number;
  weeks: StudyPlanWeek[];
  allCaughtUp: boolean;
};

export type StudyPlan = {
  subjectPlans: SubjectStudyPlan[];
  subjectsWithoutExam: { key: string; name: string; color: string }[];
};
