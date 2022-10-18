export type Role =
  | 'admin'
  | 'marketingEmployee'
  | 'departmentEmployee'
  | 'ChairEmployee'
  | 'graduationSupervisor'
  | 'classroomTeacher'
  | 'student';

export type EmployeeRole = Exclude<Role, 'student'>;

export interface Employee {
  id: string;
  fullName: string;
  role: EmployeeRole;
  active: boolean;
}
