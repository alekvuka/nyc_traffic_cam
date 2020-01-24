class CreateAvenues < ActiveRecord::Migration[5.2]
  def change
    create_table :avenues do |t|

      t.timestamps
    end
  end
end
