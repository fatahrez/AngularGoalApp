import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'Watching Find Nemo', 'Torrent the movie and watch it online', new Date(2020, 3, 14)),
    new Goal(2, 'Buy Cookies', 'Go to the store and the buy oreo cookies', new Date(2020, 3, 14)),
    new Goal(3, 'Get new phone case', 'Go at James to get new phone case. There is a discount :)', new Date(2020, 3, 14)),
    new Goal(4, 'Get Dog food', 'Go to supermarket and buy some food for Tom', new Date(2020, 3, 14)),
    new Goal(5, 'Solve mat problem homework', 'Do pythagoras theory assignment', new Date(2020, 3, 14)),
    new Goal(5, 'Plot my world domination plan', 'Continue the plan of being Kim Jong Yungs follower', new Date(2020, 3, 14))
  ];

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
