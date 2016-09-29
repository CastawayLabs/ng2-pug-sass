import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {
  async
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http, HttpModule
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { HomeModule } from './home.module';

export function main() {
  describe('Home component', () => {
    // setting module for testing
    beforeEach(() => {

    });

    it('should work',
      async(() => {
          //Test code here
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-home></sd-home>'
})
class TestComponent { }
