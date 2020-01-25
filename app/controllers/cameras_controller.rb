require 'pry'

class CamerasController < ApplicationController

  def all
    @cameras = Cameras.all
    render json: @cameras, only: [:id, :description, :url]
  end

  def show
    binding.pry
    @cameras = Camera.find_by(avenue: params[:id])
    render json: @cameras, only: [:description, :url]
  end


end
