# == Schema Information
#
# Table name: notebooks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notebook < ApplicationRecord
  validates :title, presence: true

  belongs_to :user

  has_many :notes
end
