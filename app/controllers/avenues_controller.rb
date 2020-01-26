require 'pry'

class AvenuesController < ApplicationController

  def all
    @avenues = Avenue.all
    render json: @avenues, only: [:id, :name]
  end

  def add_request
    @request = Request.create(text: params[:request], email: params[:email])
    render json: @request
  end

end
