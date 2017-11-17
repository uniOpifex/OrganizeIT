class Api::ItemsController < ApplicationController
  before_action :authenticate_user!
  
    def index
      @items = current_user.items
  
      render json: @items
    end
  
    def show
      @item = item.find(params[:id])
  
      render json: @item
    end
  
    def create
      @user = current_user
      @item = @user.items.build(item_params)
  
      if @user.save
        render json: @item, status: :created
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @item = item.find(params[:id])
  
  
      if @item.update(item_params)
        render json: @item
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      item_id = params[:id]
      @item = Item.find_by_id(item_id)
      @item.delete
      render json: {
          msg: 'Delete the item successfully'
      }
    end
  
    private
  
    def item_params
      params.require(:items).permit(:title, :description, :storage_item_id)
    end
   
  end
