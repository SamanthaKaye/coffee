import {Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: ' {{text | summary: 10 }} '
})

export class CoursesComponent {
        text = ' Some stuff  '
    }  

