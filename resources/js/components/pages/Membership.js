import React,{Fragment} from 'react'
import JoinMember from '../layout/membershipagelayout/JoinMember'
import Benefitjoin from '../layout/membershipagelayout/Benefitjoin'
import CostMember from '../layout/membershipagelayout/CostMember'

const Membership = () => {
  return (
    <Fragment>
      <JoinMember />
      <Benefitjoin />
      <CostMember />
    </Fragment>
  )
}

export default Membership