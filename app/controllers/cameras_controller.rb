require 'pry'

class CamerasController < ApplicationController

  def all
    @cameras = Cameras.all
    render json: @cameras, only: [:id, :description, :url]
  end

  def show
    @cameras = Avenue.find(params[:id]).cameras
    render json: @cameras, only: [:description, :url]
  end

end
