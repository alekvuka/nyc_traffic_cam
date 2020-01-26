require 'pry'

class RequestsController < ApplicationController

  def create
    @request = Request.create(text: params[:request], email: params[:email])
    render json: @request
  end

end
