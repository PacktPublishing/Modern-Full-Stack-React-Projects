import { useQuery } from '@tanstack/react-query'
import PropTypes from 'prop-types'

import { getUserInfo } from '../api/users.js'

export default function User({ id }) {
  const userInfoQuery = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserInfo(id),
  })
  const userInfo = userInfoQuery.data ?? {}
  return <b>{userInfo?.username ?? id}</b>
}

User.propTypes = {
  id: PropTypes.string.isRequired,
}
