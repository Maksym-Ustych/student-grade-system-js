Student Grade System

Практична робота №5  
Тема: Об'єкти  
Варіант 7 – Student Grade System

Опис системи

Система призначена для обліку оцінок студентів та аналізу їх успішності.

Структури даних

Student Object
Містить інформацію про студента:

- id
- name
- email
- grades (вкладений об'єкт з оцінками)

Методи:
- addGrade(subject, score)
- getGrade(subject)
- getAverageGrade()

Getter:
- gpa

Grade Manager

Об'єкт для керування студентами.

Методи:
- addStudent(student)
- removeStudent(id)
- updateStudent(id, data)
- getStudent(id)
- addStudentGrade(studentId, subject, score)
- getStudentsByAverage(minAverage)
- getTopStudents(n)

Statistics

Методи статистики:

- getClassAverage()
- getSubjectAverage(subject)
- getGradeDistribution()
- getFailingStudents()

Технічні особливості

- nested objects (grades)
- математичні обчислення
- сортування студентів
- агрегація даних

Demo Video
https://drive.google.com/file/d/1EjWXQUBRSgwCXoT4wrnsBSfA3BA2vl0A/view?usp=sharing
