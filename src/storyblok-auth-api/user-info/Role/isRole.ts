import { hasKey } from '../../../utils/validation/hasKey'
import { Role } from './role'

export const isRole = (obj: unknown): obj is Role =>
  hasKey(obj, 'name') && typeof obj.name === 'string'
