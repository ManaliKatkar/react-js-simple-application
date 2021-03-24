import { fetchit } from '../utils'
import { apiSettings } from '../../settings'

export async function usersQuery() {
  const response = await fetchit(apiSettings.usersHttpUrl)

  return await response.json()
}
