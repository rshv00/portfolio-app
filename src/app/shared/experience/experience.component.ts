import {Component, Input, OnInit} from '@angular/core';
import {ExperienceItem} from "../../models/ExperienceItem";
import {ContentService} from "../../core/content.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  header = 'Experience';
  experienceItems = this.contentService.experienceItems;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

}