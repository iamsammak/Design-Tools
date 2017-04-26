# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :string           not null
#  notebook_id :integer          not null
#  done        :boolean          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :body, presence: true
  # use inclusion to validate a boolean
  # since 'false' is considered 'blank'
  # so it would fail 'presence: true'
  validates :done, inclusion: { in: [true, false] }

  belongs_to :notebook

  has_one :user, through: :notebook, source: :user
end
