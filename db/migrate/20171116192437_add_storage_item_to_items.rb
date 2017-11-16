class AddStorageItemToItems < ActiveRecord::Migration[5.1]
  def change
    add_reference :items, :storage_item, foreign_key: true
  end
end
