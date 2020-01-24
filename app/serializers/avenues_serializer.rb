class AvenueSerializer < ActiveModel::Serializer
  has_many :cameras

  attributes :id, :name
end
