class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :title, null:false
      t.string :body, null:false
      t.integer :notebook_id, null:false
      t.boolean :done, null:false
      t.integer :user_id, null:false

      t.timestamps
    end
  end
end
