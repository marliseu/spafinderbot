'use strict'

const _ = require('lodash')
const dateFormat = require('dateformat')
const config = require('../config')
const schedule = require('../db/kitchenday.js')

const msgDefaults = {
    response_type: 'in_channel',
    username: 'Spafinderbot',
    icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
    let now = new Date();
    let today = dateFormat(now, "shortDate");
    let status = schedule[today];

    if (!status) {
        res.send("Bummer, I couldn't find Cinderella 🙃");
        return;
    }

    let attachments = [{
        title: "Today's kitchen day is... ",
        color: '#00bcb4',
        text: "> *" + status + "* 👠 \n" +
            "_Cinderelly, Cinderelly... Night and day it's Cinderelly, Make the fire, fix the breakfast... Wash the dishes, do the mopping!_",
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

module.exports = { pattern: /kitchenday/ig, handler: handler }