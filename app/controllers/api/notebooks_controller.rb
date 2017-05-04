class Api::NotebooksController < ApplicationController
  def index
    # @notebooks = Notebook.where(user_id: params[:user_id])
    @notebooks = Notebook.all # user until I integrate users
    render :index
    # to test without backend views
    # render json: Notebook.all.where(user_id: 1)
  end

  def show
    @notebook = Notebook.find(params[:id])
    render :show
  end

  def create
    @notebook = Notebook.new(notebook_params)
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = Notebook.find(params[:id])

    if @notebook.update(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    if @notebook.destroy
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :description, :user_id)
  end
end
