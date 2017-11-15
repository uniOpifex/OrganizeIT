class ItemCollectiontitle < ApplicationRecord
  belongs_to :user
  has_many :items
  validates :user, presence: true
  
end
