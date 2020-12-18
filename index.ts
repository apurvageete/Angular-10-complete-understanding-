import { Subscription,timer } from 'rxjs';
import { take, takeUntil } from "rxjs/operators";
import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
 
class InactivityTimerComponent implements OnDestroy, OnInit {

/*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/
//output: 0,1,2,3,4,5......
timerSubscription:Subscription  = timer(0, 1000).pipe(take(24)).subscribe(val => console.log(val));

}