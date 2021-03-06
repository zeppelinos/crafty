import ConfigStore from './ConfigStore'
import Web3ContextStore from './Web3ContextStore'
import UIStore from './UIStore'
import DomainStore from './DomainStore'

class RootStore {
  constructor () {
    this.config = new ConfigStore(this)
    this.web3Context = new Web3ContextStore(this)
    this.ui = new UIStore(this)
    this.domain = new DomainStore(this)
  }
}

export default new RootStore()
