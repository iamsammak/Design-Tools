class CreateNotebooks < ActiveRecord::Migration[5.0]
  def change
    create_table :notebooks do |t|
      t.string :title, null:false
      t.string :description
      t.integer :user_id, null:false

      t.timestamps
    end
  end
end
