import { getConfig } from './r6'
import { Command } from '../../utils/command'

export default class R6ModesWiki extends Command {
  constructor() {
    super(getConfig('modes', {
      description: 'Displays modes stats for the given play type.',
      details: 'Specify the play type to show by writing either `pvp` or `pve`.',
      examples: {
        'pvp Snake_Nade': 'Displays PvP stats for `Snake_Nade` by searching the user in the `uplay` category.',
        'pve Saunshi xbl': 'Displays PvE stats for `Saunshi` by searching the user in the `xbl` category.',
        'pvp @YoMama': 'Displays PvP stats for the mentioned user, if they linked their account.',
        'pve': 'Displays your PvE stats, if you linked your account.'
      },
      extra: 'strictPlayType'
    }))
  }
}
