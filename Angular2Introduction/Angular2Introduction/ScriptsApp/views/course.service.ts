import {Injectable} from 'angular2/core';

@Injectable()
export class CourseService {
    public getCourses(): string[] {
        let courses: string[] = ["Course 1", "Course 2", "Course 3"];
        return courses;
    }
}