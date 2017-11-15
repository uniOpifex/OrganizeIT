class CreateItemCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :item_collections do |t|
      t.string :title
      t.string :description
      t.references :user, foreign_key: true
      t.references :item, foreign_key: true
      
    end
  end
end
