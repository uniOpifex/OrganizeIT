class CreateItemsAreStoredIns < ActiveRecord::Migration[5.1]
  def change
    create_table :items_are_stored_ins do |t|
      t.references :storage_items, foreign_key: true
      t.references :items, foreign_key: true

      t.timestamps
    end
  end
end
