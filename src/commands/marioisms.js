'use strict'

const _ = require('lodash')
const config = require('../config')
const marioisms = require('../db/marioisms.js')

const msgDefaults = {
    response_type: 'in_channel',
    username: 'Spafinderbot',
    icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {

    let index = Math.floor((Math.random() * marioisms.length) + 1).toString;
    let status = marioisms[index];

    if (!status) {
        res.send("Bummer, no Marioisms were found 🙃");
        return;
    }

    let attachments = [{
        title: "Mario says...\n",
        color: '#00bcb4',
        text: status,
        mrkdwn_in: ['text']
    }]

    let msg = _.defaults({
        channel: payload.channel_name,
        attachments: attachments
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)
    return
}

module.exports = { pattern: /marioisms/ig, handler: handler }