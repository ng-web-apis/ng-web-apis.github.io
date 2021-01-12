import {Component, Inject} from '@angular/core';
import {WEB_AUDIO_SUPPORT} from '@ng-web-apis/audio';
import {GEOLOCATION_SUPPORT} from '@ng-web-apis/geolocation';
import {INTERSECTION_OBSERVER_SUPPORT} from '@ng-web-apis/intersection-observer';
import {MIDI_SUPPORT} from '@ng-web-apis/midi';
import {PAYMENT_REQUEST_SUPPORT} from '@ng-web-apis/payment-request';
import {PERMISSIONS_SUPPORT} from '@ng-web-apis/permissions';
import {RESIZE_OBSERVER_SUPPORT} from '@ng-web-apis/resize-observer';

@Component({
    selector: 'main',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(
        @Inject(PAYMENT_REQUEST_SUPPORT) readonly paymentRequestSupport: boolean,
        @Inject(GEOLOCATION_SUPPORT) readonly geolocationSupport: boolean,
        @Inject(INTERSECTION_OBSERVER_SUPPORT) readonly intersectionSupport: boolean,
        @Inject(RESIZE_OBSERVER_SUPPORT) readonly resizeSupport: boolean,
        @Inject(MIDI_SUPPORT) readonly midiSupport: boolean,
        @Inject(WEB_AUDIO_SUPPORT) readonly audioSupport: boolean,
        @Inject(PERMISSIONS_SUPPORT) readonly permissionsSupport: boolean,
    ) {}
}
