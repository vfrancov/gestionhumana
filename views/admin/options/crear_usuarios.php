<section class="content-header">
	<h1>
		Registrar Usuario 
		<small>Registre el usuario de la institucion a la cual pertenece</small>
	</h1>	
</section>
<section class="content">	
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12">
			<div class="box box-info">
				<div class="box-header with-border"><h3 class="box-title">Formulario Usuarios</h3></div>
				<form id="frm-crear-usuario" class="form-horizontal" action="javascript:" method="post" autocomplete="off">
					<div class="box-body">
						<div class="row">
							<div class="col-lg-6">								
								<div class="form-group">
									<label for="Dato" class="col-sm-4 control-label">Institucion</label>
									<div class="col-sm-8">
										<select name="nit" class="form-control required">	
											<?php comboBox('gh_institucion', array('nit', 'nombre_institucion')); ?>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label for="Dato" class="col-sm-4 control-label">Empleado</label>
									<div class="col-sm-8">
										<select name="id_usuario" class="form-control required">	
											<?php comboBox('gh_personas', array('id_usuario', 'nombres')); ?>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label for="Dato" class="col-sm-4 control-label">Correo Electronico</label>
									<div class="col-sm-8">
										<input type="text" name="user" class="form-control required" placeholder="Correo Electronico">
									</div>
								</div>
								<div class="form-group">
									<label for="Dato" class="col-sm-4 control-label">Contraseña</label>
									<div class="col-sm-8">
										<input id="passone" type="password" name="pass" class="form-control required" placeholder="Contraseña">
									</div>
								</div>
								<div class="form-group">
									<label for="Dato" class="col-sm-4 control-label">Confirmar Contraseña</label>
									<div class="col-sm-8">
										<input id="passtwo" type="password" name="confirm" class="form-control required" placeholder="Confirmar Contraseña">
									</div>
								</div>
								<div class="form-group">
									<label for="Dato" class="col-sm-4 control-label">Rol</label>
									<div class="col-sm-8">
										<select name="id_rol" class="form-control required">	
											<?php comboBox('gh_roles', array('id', 'rol')); ?>
										</select>
									</div>
								</div>
							</div>							
						</div>
					</div>
					<div class="box-footer">
						<div class="row">
							<div class="col-lg-4"><input type="reset" class="btn btn-danger" value="Cancelar"/></div>
							<div class="col-lg-8"><input id="btn-crea-usuario" type="submit" class="btn btn-info" value="Registrar Usuario"/></div>
						</div>
					</div>
				</form>
			</div>			
		</div>
	</div>
</section>