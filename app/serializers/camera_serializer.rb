class AvenueSerializer < ActiveModel::Serializer
  has_many :cameras

  attributes :id, :description, :url, :avenue
end
