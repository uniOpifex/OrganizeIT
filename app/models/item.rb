class Item < ApplicationRecord
  belongs_to :user
  belongs_to :storage_item
  validates :user, presence: true
end
