const student1 = {
  id: 1,
  name: "Maksym Ustych",
  email: "maksym@example.com",
  grades: {
    math: 90,
    programming: 95,
    english: 85
  },

  addGrade(subject, score) {
    this.grades[subject] = score;
  },

  getGrade(subject) {
    return this.grades[subject];
  },

  getAverageGrade() {
    const scores = Object.values(this.grades);
    const sum = scores.reduce((total, grade) => total + grade, 0);
    return sum / scores.length;
  },

  get gpa() {
    return this.getAverageGrade();
  }
};

const student2 = {
  id: 2,
  name: "Ivan Petrenko",
  email: "ivan@example.com",
  grades: {
    math: 72,
    programming: 80,
    english: 68
  },

  addGrade(subject, score) {
    this.grades[subject] = score;
  },

  getGrade(subject) {
    return this.grades[subject];
  },

  getAverageGrade() {
    const scores = Object.values(this.grades);
    const sum = scores.reduce((total, grade) => total + grade, 0);
    return sum / scores.length;
  },

  get gpa() {
    return this.getAverageGrade();
  }
};

const student3 = {
  id: 3,
  name: "Olena Kovalenko",
  email: "olena@example.com",
  grades: {
    math: 95,
    programming: 92,
    english: 96
  },

  addGrade(subject, score) {
    this.grades[subject] = score;
  },

  getGrade(subject) {
    return this.grades[subject];
  },

  getAverageGrade() {
    const scores = Object.values(this.grades);
    const sum = scores.reduce((total, grade) => total + grade, 0);
    return sum / scores.length;
  },

  get gpa() {
    return this.getAverageGrade();
  }
};

const gradeManager = {
  students: [],

  addStudent(student) {
    this.students.push(student);
  },

  removeStudent(id) {
    this.students = this.students.filter(student => student.id !== id);
  },

  updateStudent(id, data) {
    const student = this.getStudent(id);
    if (student) {
      Object.assign(student, data);
    }
  },

  getStudent(id) {
    return this.students.find(student => student.id === id);
  },

  addStudentGrade(studentId, subject, score) {
    const student = this.getStudent(studentId);
    if (student) {
      student.addGrade(subject, score);
    }
  },

  getStudentsByAverage(minAverage) {
    return this.students.filter(student => student.getAverageGrade() >= minAverage);
  },

  getTopStudents(n) {
    return [...this.students]
      .sort((a, b) => b.getAverageGrade() - a.getAverageGrade())
      .slice(0, n);
  },

  getClassAverage() {
    const total = this.students.reduce((sum, student) => sum + student.getAverageGrade(), 0);
    return total / this.students.length;
  },

  getSubjectAverage(subject) {
    const validStudents = this.students.filter(student => student.grades[subject] !== undefined);
    const total = validStudents.reduce((sum, student) => sum + student.grades[subject], 0);
    return total / validStudents.length;
  },

  getGradeDistribution() {
    const distribution = {
      excellent: 0,
      good: 0,
      satisfactory: 0,
      failing: 0
    };

    this.students.forEach(student => {
      const avg = student.getAverageGrade();

      if (avg >= 90) {
        distribution.excellent++;
      } else if (avg >= 75) {
        distribution.good++;
      } else if (avg >= 60) {
        distribution.satisfactory++;
      } else {
        distribution.failing++;
      }
    });

    return distribution;
  },

  getFailingStudents() {
    return this.students.filter(student => student.getAverageGrade() < 60);
  }
};

// Додавання студентів
gradeManager.addStudent(student1);
gradeManager.addStudent(student2);
gradeManager.addStudent(student3);

// Додавання оцінки
gradeManager.addStudentGrade(1, "history", 88);

// Вивід даних студента
console.log("Інформація про студента 1:");
console.log(student1);

console.log("Оцінка з programming:");
console.log(student1.getGrade("programming"));

console.log("Середній бал студента 1:");
console.log(student1.getAverageGrade());

console.log("GPA студента 1:");
console.log(student1.gpa);

// Робота з Object.keys / values / entries
console.log("Предмети студента 1:");
console.log(Object.keys(student1.grades));

console.log("Оцінки студента 1:");
console.log(Object.values(student1.grades));

console.log("Предмети та оцінки студента 1:");
console.log(Object.entries(student1.grades));

// Spread і деструктуризація
const studentCopy = { ...student1 };

console.log("Копія об'єкта студента:");
console.log(studentCopy);

const { name, email } = student1;

console.log("Деструктуризація:");
console.log(name);
console.log(email);

// Робота Grade Manager
console.log("Пошук студента за id = 2:");
console.log(gradeManager.getStudent(2));

gradeManager.updateStudent(2, { name: "Ivanenko Ivan" });
console.log("Оновлений студент з id = 2:");
console.log(gradeManager.getStudent(2));

console.log("Студенти із середнім балом не менше 85:");
console.log(gradeManager.getStudentsByAverage(85));

console.log("Топ 2 студенти:");
console.log(gradeManager.getTopStudents(2));

// Статистика
console.log("Середній бал групи:");
console.log(gradeManager.getClassAverage());

console.log("Середній бал з programming:");
console.log(gradeManager.getSubjectAverage("programming"));

console.log("Розподіл оцінок:");
console.log(gradeManager.getGradeDistribution());

console.log("Студенти, які не встигають:");
console.log(gradeManager.getFailingStudents());