class CreateCameras < ActiveRecord::Migration[5.2]
  def change
    create_table :cameras do |t|
      t.string :description
      t.string :url
      t.belongs_to :avenue

      t.timestamps
    end
  end
end
