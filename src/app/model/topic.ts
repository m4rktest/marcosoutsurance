export interface Root {
  items: Item[]
  has_more: boolean
  quota_max: number
  quota_remaining: number
}

 interface Item {
  tags: string[]
  owner: Owner
  is_answered: boolean
  view_count: number
  protected_date: number
  accepted_answer_id: number
  answer_count: number
  score: number
  last_activity_date: number
  creation_date: number
  last_edit_date: number
  question_id: number
  content_license: string
  link: string
  title: string
  community_owned_date?: number
}

 interface Owner {
  reputation: number
  user_id: number
  user_type: string
  accept_rate: number
  profile_image: string
  display_name: string
  link: string
}
