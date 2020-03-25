import {Component, Inject} from '@angular/core';
import {GEOLOCATION_SUPPORT} from '@ng-web-apis/geolocation';
import {INTERSECTION_OBSERVER_SUPPORT} from '@ng-web-apis/intersection-observer';
import {MIDI_SUPPORT} from '@ng-web-apis/midi';
import {PAYMENT_REQUEST_SUPPORT} from '@ng-web-apis/payment-request';

@Component({
    selector: 'main',
    templateUrl: './app.component.html',
})
export class AppComponent {
    // TODO: Issue with Ivy: https://github.com/angular/angular/issues/34267
    readonly audioSupport = !!window.AudioContext || !!(window as any).webkitAudioContext;

    constructor(
        @Inject(PAYMENT_REQUEST_SUPPORT) readonly paymentRequestSupport: boolean,
        @Inject(GEOLOCATION_SUPPORT) readonly geolocationSupport: boolean,
        @Inject(INTERSECTION_OBSERVER_SUPPORT) readonly intersectionSupport: boolean,
        @Inject(MIDI_SUPPORT) readonly midiSupport: boolean,
    ) {}
}
