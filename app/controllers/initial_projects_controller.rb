class InitialProjectsController < ApplicationController
  # GET /initial_projects
  # GET /initial_projects.json
  def index
    @initial_projects = InitialProject.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @initial_projects }
    end
  end

  # GET /initial_projects/1
  # GET /initial_projects/1.json
  def show
    @initial_project = InitialProject.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @initial_project }
    end
  end

  # GET /initial_projects/new
  # GET /initial_projects/new.json
  def new
    @initial_project = InitialProject.new(:name => "myblog")

    respond_to do |format|
      format.html
      format.json { render json: @initial_project }
    end
  end

  # GET /initial_projects/1/edit
  def edit
    @initial_project = InitialProject.find(params[:id])
  end

  # POST /initial_projects
  # POST /initial_projects.json
  def create
    @initial_project = current_user.initial_projects.build(:name => params[:initial_project_name])
    require "fileutils"
    FileUtils.mkdir_p current_user.initial_projects_path
    FileUtils.cp_r File.join(InitialProject::SCAFFOLDS_FOLDER_PATH, params[:initial_project_name]),
                      @initial_project.path rescue coping_failed = true

    respond_to do |format|
      if !(coping_failed |= nil) && @initial_project.save
        format.html { redirect_to @initial_project, notice: 'Initial project was successfully created.' }
        format.json do
          render json: { :initial_project => @initial_project,
                          :project_path => initial_project_project_structure_path(@initial_project.id) }
        end
      else
        format.html { render action: "new" }
        format.json { render json: @initial_project.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  # PUT /initial_projects/1
  # PUT /initial_projects/1.json
  def update
    @initial_project = InitialProject.find(params[:id])

    respond_to do |format|
      if @initial_project.update_attributes(params[:initial_project])
        format.html { redirect_to @initial_project, notice: 'Initial project was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @initial_project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /initial_projects/1
  # DELETE /initial_projects/1.json
  def destroy
    @initial_project = InitialProject.find(params[:id])
    @initial_project.destroy

    respond_to do |format|
      format.html { redirect_to initial_projects_url }
      format.json { head :no_content }
    end
  end

  #TODO НЕ ЗАКІНЧИВ ЩЕ. ТРЕБА ХОВАТИ ФПЙЛОВУ СТРУКТУРУ
  #TODO ПОКАЗУВАТИ структуру підпапок
  def project_structure
    initial_project = InitialProject.find(params[:initial_project_id])
    path = (params[:dir] == '/' ? initial_project.path : params[:dir])
    @files = Dir.glob("#{path}/*")
    respond_to do |format|
      format.html { render :layout => false }
    end
  end
end
