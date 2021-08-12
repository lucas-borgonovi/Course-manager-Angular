import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { CourseListComponent } from "./course-list.component";
import { ReplacePipe } from '../shared/pipe/replace.pipe';
import { CommonModule } from "@angular/common";
import { StarComponent } from "../shared/component/star/star.compoment";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports:[
        StarModule,
        AppPipeModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
              {
                path: 'courses', component: CourseListComponent
              },
              {
                path:'courses/info/:id', component: CourseInfoComponent
              }
        ])
    ]
})
export class CourseModule{

}