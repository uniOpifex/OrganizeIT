class StorageItem < ApplicationRecord
  belongs_to :user
  validates :user, presence: true
  has_many :items
end
