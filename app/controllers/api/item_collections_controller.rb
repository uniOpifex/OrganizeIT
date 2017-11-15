class Api::ItemCollectionsController < ApplicationController
 before_action :authenticate_user!

  def index
    @item_collections = current_user.item_collections

    render json: @item_collections
  end

  def show
    @item_collection = item_colelction_collection.find(params[:id])

    render json: @item
  end

  def create
    @user = current_user
    @item_collection = @user.item_collections.build(item_collection_params)

    if @user.save
      render json: @item_collection, status: :created, location: @item_collection
    else
      render json: @item_collection.errors, status: :unprocessable_entity
    end
  end

  def update
    @item_collection = item_collection.find(params[:id])


    if @item_collection.update(item_collection_params)
      render json: @item_collection
    else
      render json: @item_collection.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @item_collection = item_collection.find(params[:id]).delete

    render status: :ok
  end

  private

  def item_params
    params.require(:item_collection).permit(:title, :description)
  end
end
