'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
    response_type: 'in_channel',
    username: 'Spafinderbot',
    icon_emoji: config('ICON_EMOJI')
}

let attachments = [{
        title: 'Spafinderbot will help you find out whose kitchen day it is!',
        color: '#00bcb4',
        text: '`/spafinder kitchenday` returns the person on kitchen duty today \n',
        mrkdwn_in: ['text']
    },
    {
        title: 'Configuring Spafinderbot',
        color: '#E3E4E6',
        text: '`/spafinder help` ... you\'re lookin at it! \n',
        mrkdwn_in: ['text']
    }
]

const handler = (payload, res) => {
    let msg = _.defaults({
        channel: payload.channel_name,
        attachments: attachments
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)
    return
}

module.exports = { pattern: /help/ig, handler: handler }