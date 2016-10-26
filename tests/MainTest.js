'use strict';

//import * as mqtt from 'mqtt';
import * as mqtt from '../build/mqtt';

describe('MQTT Client', function(){

    it('can establish a connection', function(done){

        let x = mqtt.default;

        console.log(x);

        var client  = x.connect('ws://iot.eclipse.org:80/ws');

        client.on('connect', function () {
            client.subscribe('presence');
            client.publish('presence', 'Hello mqtt');
        });

        client.on('message', function (topic, message) {
            // message is Buffer
            console.log(message.toString());
            client.end();
        });

        client.on('close', function () {
            done();
        });
    });

});