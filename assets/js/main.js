$(function(){

	var App = {

		borrarMensajeError : function(id, delay)
		{
			setTimeout(function()
			{
				$(id).fadeOut(100);
			}, delay);
		},

		calculaEdad : function()
		{
			if($("#fecha_nacimiento").val() == "")
				return false;
			else
			{
				$("#edad_empleado").on('click', function(){
					var get_date = $("#fecha_nacimiento").val().split("-");
					var con_date = new Date(get_date[0], get_date[1] - 1, get_date[2]);
					var cur_date = new Date();

					var get_birth_date = cur_date.getFullYear() - con_date.getFullYear();

					$(this).val(get_birth_date);
				});
			}
		}, 

		mostrarMensaje : function(title, msg, type, delay)
		{
			return new PNotify({ title : title, text : msg, type : type, delay : delay  });
		},

		validarFormularios : function(form, required)
		{
			var get_form = $(form).find(required), status;

			for(i = 0; i < get_form.length; i++)
			{
				var inputs = $(get_form[i]);

				if(inputs.val() == '')
				{
					inputs.focus().val('');
					this.mostrarMensaje('Error', 'El campo es requerido', 'error', 2500);
					status = false;
					break;
				}
				else if($.trim(inputs.val()) == '')
				{
					inputs.focus().val('');
					this.mostrarMensaje('Error', 'El campo es requerido', 'error', 2500);
					status = false;
					break;
				}
				else
					status = true;
			}

			return status;
		},

		submitFormularios : function(form, required, file, btn)
		{
			$(btn).click(function(){
				App.procesaFormulario(form, required, file, btn);
			})
		},

		procesaFormulario : function(form, required, file, btn)
		{
			if(!this.validarFormularios(form, required))
				return false;
			else
			{
				var bussy = false;

				if(bussy)
				{
					bussy = true;
					return;
				}
				else
				{
					$.ajax({
						url 	: url + 'app/admin/procesa/' + file + ".php",
						type	: 'POST',
						cache	: true,
						data	: $(form).serialize(),
						beforeSend : function()
						{
							$(btn).attr('disabled', true);
						},
						success	: function(response)
						{
							App.evaluaRespuesta(response);
						},
						complete : function()
						{
							$(btn).attr('disabled', false);
						}
					});
				}
			}
		},

		evaluaRespuesta : function(response)
		{
			console.log(response);
		}

	};

	App.borrarMensajeError('#msg-error', 3000);

	//boton check
	$('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });

    $(".datepicker").datepicker({
    	format : 'yyyy-mm-dd'
    });

    App.calculaEdad();
    App.submitFormularios("#frm-crear-institucion", ".required", "crea_institucion", "#btn-frm-registra-inst");
    App.submitFormularios("#frm-crear-empleados", ".required", "crea_empleado", "#btn-crea-empleado");
    App.submitFormularios("#frm-crear-sede", ".required", "crea_sede", "#btn-crea-sede");
    App.submitFormularios("#frm-crear-usuario", ".required", "crea_usuario", "#btn-crea-usuario");

});