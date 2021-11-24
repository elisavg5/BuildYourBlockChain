#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import network from './tools/network.js'

const argv = yargs(hideBin(process.argv)) // Analyse des paramètres
  .command('run [network]', 'Lance un réseau de noeuds')
  .option('network', {
    alias: 'n',
    default: 'a-b, b-c, c-a',
    description: 'Topologie du réseau'
  })
  .option('port', {
    alias: 'p',
    default: 3000,
    description: 'port à utiliser'
  })
  .demandCommand(1, 'Vous devez indiquer une commande')
  .help()
  .argv

switch (argv._[0]) {
  case 'run':
    network.runNetwork(network.parseTopology(argv.network), argv.port)
    break
  default:
    console.error('Commande inconnue')
}
