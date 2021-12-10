import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/service/link.service';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  public links: Link[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private linkService: LinkService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getAllLinks(params['domain']);
    });
  }

  getAllLinks(domain: string) {
    this.linkService.listByDomain(domain).subscribe((links) => {
      this.links = links;
    });
  }
}
