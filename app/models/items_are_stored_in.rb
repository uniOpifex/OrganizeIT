class ItemsAreStoredIn < ApplicationRecord
  belongs_to :storage_item
  belongs_to :item
end
